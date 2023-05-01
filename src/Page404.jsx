const Page404 = ({page}) => page(
    <div style={{margin:'50px'}}>
        <h1>Тут пока пусто <span style={{fontSize:'30pt'}}>&#8709;</span></h1>
        <h1 className="main-menu" onClick={page.index}>На главную</h1>
    </div>
);

export default Page404;