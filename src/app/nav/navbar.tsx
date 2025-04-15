import '@/app/css/navstyle.css'

export default function NavigationBar() {
    return (
        <div className="navbar">
            <ul>
                <li className='navicon'><a>spoons.su</a></li>
                <li className='navuser'><a href="/user">User</a></li>
                <li className='navabout'><a href="/about">About</a></li>
                <li className='navfaq'><a href="/faq">FAQ</a></li>
                <li className='navproducts'><a href="/products">Products</a></li>
                <li className='navhome'><a href="/">Home</a></li>
            </ul>
        </div>
    );
}