import Header from './Header';

const layoutStyle = {
    marin: 20, 
    padding: 20, 
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;