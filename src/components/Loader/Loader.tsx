import './Loader.css';
import {Flex, Spin} from "antd";

export default function Loader() {
    return (
        <Flex align="center" gap="middle" className='loader'>
            <Spin size="large" />
        </Flex>
    );
};