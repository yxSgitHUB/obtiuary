import React ,{FC} from "react";
import { Layout, Menu } from 'antd';
import {Result} from "../Sidebar"
import "./index.scss"
const { Header, Content, Footer, Sider } = Layout;
export const MyLayout:FC = ()=>{
    return <Layout >
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className={"headerTitle"}>地府<br/>管理系统</div>
            <Menu theme="dark" mode="vertical" onClick={(a) => {
                sessionStorage.pageNum = 1;
                //history.push({pathname: a.key})
            }}>
                {Result}
            </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
}
