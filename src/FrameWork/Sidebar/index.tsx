import React from "react";
import {UserOutlined} from '@ant-design/icons';
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
        menuName: '权限管理',
        menuUrl: '/1',
        icon: UserOutlined,
        child:[{
            menuName: '角色管理',
            menuUrl: '/roleManagement',
            icon: UserOutlined,
        },{
            menuName: '账户管理',
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