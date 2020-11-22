import React ,{FC} from "react";
import { Form, Input, Button, Card } from 'antd';
import axios from "../../Axios"
import "./index.scss"
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
};
const FormItem = Form.Item
export const Login:FC<{onChange:(userParam:{userName:string,phone:string}, status:boolean)=>void}> = (props) => {
    const onFinish = (values:{userName:string,phone:string}) => {
        axios.post("/test/login",{...values}).then((data:any)=>{
            //console.log(data)
                if(data.data.errorCode==="200"){
                    props.onChange(values,true)
                }
        })

        ///console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };

    return (
       <div className='loginBox'>
           <Card title={"地府后台管理系统"} style={{ width: 600 }}>
               <Form
                   {...layout}
                   name="basic"
                   initialValues={{
                       userName:"admin",
                       phone: "13311112222" ,
                   }}
                   onFinish={onFinish}
                   onFinishFailed={onFinishFailed}
               >
                   <FormItem
                       label="姓名"
                       name="userName"
                       rules={[{ required: true, message: '请输入姓名' }]}
                   >
                       <Input />
                   </FormItem>

                   <FormItem
                       label="手机号"
                       name="phone"
                       rules={[{ required: true, message: '请输入手机号!' }]}
                   >
                       <Input type={"phone"} />
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
