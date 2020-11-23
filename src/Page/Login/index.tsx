import React, {FC} from "react";
import {connect} from 'react-redux'
import {Form, Input, Button, Card} from 'antd';
import {cacheUser} from "../../Redux/Action"
import axios from "../../Axios"
import "./index.scss"

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 4, span: 16},
};
const FormItem = Form.Item
const Login: FC<{
    cacheLogin: (userParam: userMeg) => void,
}> = (props) => {
    const onFinish = (values: userMeg) => {
        axios.post("/test/login", {...values}).then((data: any) => {
            if (data.data.errorCode === "200") {
                //props.onChange(values,true)
                props.cacheLogin(values);
            }
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='loginBox'>
            <Card title={"地府后台管理系统"} style={{width: 600}}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        userName: "admin",
                        phone: "13311112222",
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <FormItem
                        label="姓名"
                        name="userName"
                        rules={[{required: true, message: '请输入姓名'}]}
                    >
                        <Input/>
                    </FormItem>

                    <FormItem
                        label="手机号"
                        name="phone"
                        rules={[{required: true, message: '请输入手机号!'}]}
                    >
                        <Input type={"phone"}/>
                    </FormItem>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};
const mapStateToProps = (state: userMeg): userMeg => ({
    userName: state.userName,
    phone: state.phone
})
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        cacheLogin: (user: userMeg) => {
            dispatch(cacheUser(user))
        },
    }
};
let newLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export {newLogin as Login}