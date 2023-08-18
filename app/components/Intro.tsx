import { Card, Divider } from 'antd'
import Meta from 'antd/es/card/Meta'

export default function Intro() {
    return (
        <>
            <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src="https://media.licdn.com/dms/image/C4D03AQEKTIv1BxCkOw/profile-displayphoto-shrink_800_800/0/1653420745355?e=1696464000&v=beta&t=ZstwtTMRcff4JEShL2_4G3by4FOc6sdRmKUix4vxN2I" />}
            >
                <Meta title="Software Engineer" description="Full Stack Developer and All-Around Geek" />
            </Card>
            <Divider plain />
            <Card
                hoverable
                style={{ width: '100%' }}
            >
                Hello! My name is <strong>Saad</strong>. I&lsquo;m a Full Stack Developer
                with <i>Computer Science</i> degree. I have passion for{' '}
                <i>Performance Optimization</i> and <i>Enterprise solutions</i>. I
                have extensive development experience in fast paced organizations.
            </Card>
        </>
    )
}