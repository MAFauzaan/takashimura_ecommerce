import { Layout } from 'antd';
import { Header as PageHeader } from "../Header/Header";
import { Footer as PageFooter } from "../Footer/Footer";
import { useDynamicScreen } from '../../common/hooks/useDynamicScreen';
import { useRouter } from 'next/router';

const { Header, Footer, Content } = Layout;

interface ILayout {
    children: any
}

const PageLayout = ({ children }: ILayout) => {
    const router = useRouter();
    const { route } = router;
    const { windowWidth } = useDynamicScreen();

    return (
        <Layout>
            {
                route === '/checkout/information' ||
                    route === '/checkout/payment' ||
                    route === '/checkout/shipment' ?
                    <Content className='bg-white'>
                        {children}
                    </Content>
                    :
                    route === '/login' ||
                        route === '/signup' ?
                        <>
                            <Header className={`${windowWidth <= 769 ? 'p-0' : ''} bg-white  border-b-2`}>
                                <PageHeader />
                            </Header>
                            <Content className="bg-white">
                                {children}
                            </Content>
                        </>
                        :
                        <>
                            <Header className={`${windowWidth <= 769 ? 'p-0' : ''} bg-white  border-b-2`}>
                                <PageHeader />
                            </Header>
                            <Content className="bg-white">
                                {children}
                            </Content>
                            <Footer className={`${windowWidth <= 769 ? 'p-5' : ''} bg-white`}>
                                <PageFooter />
                            </Footer>
                        </>
            }
        </Layout>
    )
};

export default PageLayout;