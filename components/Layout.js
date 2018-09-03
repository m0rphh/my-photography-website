import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress';
import MenuItem from '@material-ui/core/MenuItem';
import TemporaryDrawer from '../components/TemoraryDrawer';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default  ({ children, title = 'Goran Matejin Photography' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <TemporaryDrawer>
				<Link href='/'><MenuItem><a >Home</a></MenuItem></Link>
				<Link href='/gallery'><MenuItem><a >Gallery</a></MenuItem></Link>
				<Link href='/landscapes'><MenuItem><a>Landscapes</a></MenuItem></Link>
				<Link href='/blog'><MenuItem><a >Blog</a></MenuItem></Link>
				<Link href='/non-existing'><MenuItem><a >404 Page</a></MenuItem></Link>
			</TemporaryDrawer>
      </nav>
    </header>
  <div style={{}}>
    { children }
  </div>
    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)