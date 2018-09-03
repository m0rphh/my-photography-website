import App, { Container } from 'next/app';
import React from 'react';
import NextHead from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import MenuItem from '@material-ui/core/MenuItem';
import TemporaryDrawer from '../components/TemoraryDrawer';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Layout extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props;
		return <Container>
			{/* <TemporaryDrawer>
				<Link href='/'><MenuItem><a >Home</a></MenuItem></Link>
				<Link href='/gallery'><MenuItem><a >Gallery</a></MenuItem></Link>
				<Link href='/landscapes'><MenuItem><a>Landscapes</a></MenuItem></Link>
				<Link href='/blog'><MenuItem><a >Blog</a></MenuItem></Link>
				<Link href='/non-existing'><MenuItem><a >404 Page</a></MenuItem></Link>
			</TemporaryDrawer> */}
			<Component {...pageProps} />
		</Container>
	}
}