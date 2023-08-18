import { Space, Button, Alert } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

export default function MiddleCta() {
    return (
        <>
            <Alert
                // message="Want to learn more?"
                description="To download CV in printable form click on the Download button now"
                type="info"
                showIcon
                action={
                    <Space direction="vertical">
                    <Button type="primary" 
                            shape="round" 
                            icon={<DownloadOutlined />} 
                            size='large' 
                            className='mx-auto sm:mt-2'
                            href='https://github.com/mazemax/resume/raw/main/Saad_CV_2020_V4.0.pdf' 
                            download={true}
                    >
                        Download
                    </Button>
                    </Space>
                }
                className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0'
                />
        </>
    )
}