import React from "react";
import {
    UserOutlined,
    HomeOutlined,
    AppstoreOutlined,
    UserSwitchOutlined,
    CheckOutlined,
    BookOutlined,
    FileProtectOutlined,
    PrinterOutlined, ProfileOutlined, RedoOutlined, MoneyCollectOutlined, ReconciliationOutlined
} from '@ant-design/icons';
import SubMenu from "antd/lib/menu/SubMenu";
import Menu from "antd/lib/menu";
interface MenuItem {
    child?: MenuItem[],
    menuUrl: string | undefined,
    menuName: string,
    icon:any
}
export const MenuList = [
    {
        menuName: '首页',
        menuUrl: '/',
        icon: HomeOutlined,
    },{
        menuName: '生死簿',
        menuUrl: '/book',
        icon: AppstoreOutlined,
        child:[{
            menuName: '用户管理',
            menuUrl: '/allPeopleManagement',
            icon: UserOutlined,
        },{
            menuName: '数据同步',
            menuUrl: '/allPeopleData',
            icon: UserSwitchOutlined,
        }]
    },{
        menuName: '勾魂管理',
        menuUrl: '/soul',
        icon: CheckOutlined,
    },{
        menuName: '阎王殿审判记录',
        menuUrl: '/record',
        icon: BookOutlined,
    },{
        menuName: '十八层地狱',
        menuUrl: '/hells',
        icon: FileProtectOutlined,
        child:[{
            menuName: '设备管理',
            menuUrl: '/deviceManagement',
            icon: PrinterOutlined,
        },{
            menuName: '作业流程',
            menuUrl: '/workManagement',
            icon: ProfileOutlined,
        },{
            menuName: '用户管理',
            menuUrl: '/hellsPeopleManagement',
            icon: UserSwitchOutlined,
        }]
    },{
        menuName: '六道轮回',
        menuUrl: '/samsara',
        icon: RedoOutlined,
    },{
        menuName: '冥币管理',
        menuUrl: '/deathMoney',
        icon: MoneyCollectOutlined,
    },{
        menuName: '日志管理',
        menuUrl: '/journal',
        icon: ReconciliationOutlined,
    },{
        menuName: '系统管理',
        menuUrl: '/system',
        icon: UserOutlined,
        child:[{
            menuName: '角色管理',
            menuUrl: '/roleManagement',
            icon: UserOutlined,
        },{
            menuName: '管理员',
            menuUrl: '/accountManagement',
            icon: UserOutlined,
        }]
    },]
function showMenu(menu: MenuItem) {
    let Icon = menu.icon;
    if (menu.child) {
        return (
            <SubMenu key={menu.menuUrl}
                     title={<span><Icon/><span>{menu.menuName}</span></span>}>
                {
                    menu.child.map((v: MenuItem) => showMenu(v))
                }
            </SubMenu>
        )
    } else {
        return (
            <Menu.Item key={menu.menuUrl}>
                <Icon/>
                <span className="nav-text">{menu.menuName}</span>
            </Menu.Item>
        )
    }
}
//export const Result=()=>MenuList.map((v: MenuItem) =>showMenu(v))
export const Result=MenuList.map((v: MenuItem) =>showMenu(v))