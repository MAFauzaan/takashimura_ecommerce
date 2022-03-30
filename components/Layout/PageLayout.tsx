import { Layout } from 'antd';
import { Header as PageHeader } from "../Header/Header";
import { Footer as PageFooter} from "../Footer/Footer";
import { useDynamicScreen } from '../../hooks/useDynamicScreen';

const { Header, Footer, Content } = Layout;

interface ILayout {
    children: any
}

const PageLayout = ({ children }: ILayout) => {

    const { windowWidth } = useDynamicScreen();

    return (
        <Layout>
            <Header className={`${windowWidth < 768 ? 'p-0' : ''} bg-white`}>
                <PageHeader />
            </Header>
            <Content className="bg-white">
                {children}
            </Content>
            <Footer className="bg-white">
                <PageFooter />
            </Footer>
        </Layout>
    )
} ;

export default PageLayout;