import { useEffect, useState} from 'react';
import Main from './Main';
import Page404 from './Page404';

function App() {

  const page_url_param = '?page=';
  const indexPageName = 'Результаты ЕГЭ';
  const extractPage = () => {
    var url = document.location.href.split(page_url_param);
    if(url.length > 1) {
      return decodeURIComponent(url[1]);
    }
    return indexPageName;
  };

  const [page, setPage] = useState(extractPage());
  const [data, setData] = useState({});
  
  const tex = str => `\\(${str}\\)`;
  const p = (pageName) => {
    var pageRouter = (div) => page===pageName?div:<></>;
    pageRouter.window = url => (e) => {
      e.preventDefault();
      window.open(url.indexOf('://')!==-1?url:document.location.href.split(page_url_param)[0]+page_url_param+url);
    }
    pageRouter.location = url => e => {
      e.preventDefault();
      document.location.href = url;
    }
    pageRouter.navigate = name => e => {
      e.preventDefault();
      if(e.ctrlKey) {
        var prev_url = document.location.href;
        prev_url = prev_url.split(page_url_param)[0];
        window.open(prev_url+page_url_param+name);
      }
      else {
        if(name === indexPageName && document.location.href.indexOf(page_url_param)!==-1) {
          document.location.href = document.location.href.split(page_url_param)[0];
        }
        else {
          setPage(name);
        }
      }
    };
    pageRouter.index = pageRouter.navigate(indexPageName);
    const scrollFunction = (ref) => {
      var offset = ref.current.offsetTop;
      var d = Math.sign(offset-window.scrollY+20);
      const scrollSpeed = 50;
      var timer = setInterval(() => {
        if(Math.abs(window.scrollY - offset)>=scrollSpeed) {
          window.scrollTo(0, window.scrollY+d*scrollSpeed);
        }
        else {
          ref.current.scrollIntoView();
          clearInterval(timer);
        }
      }, 1);
    };
    pageRouter.scroll = ref => () => scrollFunction(ref);
    pageRouter.tex = tex;
    return pageRouter;
  }

  useEffect(() => {
    document.title = page;
  }, [page]);

  useEffect(() => {
    var fetchData = async (url) => {
      var promise;
      var response = {};
      try {
        promise = await fetch(url);
        if(!promise.ok) {
          return console.log(promise.status);
        }
        response = await promise.json();
      }
      catch(e) {
        console.log(e);
      }
      setData(response);
    }
    fetchData("https://raw.githubusercontent.com/AngryBro/checkege/master/data/data.json");
  }, []);



  return (
    <div className='root'>
      <Main page={p(indexPageName)} data={data} />
      <Page404 page={p('404')} />
    </div>
  );
}

export default App;
