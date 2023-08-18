import React from 'react'
import { Typography, Collapse, theme, Badge, Row, Col } from 'antd'
import type { CSSProperties } from 'react'
import type { CollapseProps } from 'antd'
import { PlusOutlined, MinusOutlined, CarTwoTone } from '@ant-design/icons'

const renderLabel = (position: string, years: string) => {
  return (
    <>
      <Row gutter={24} justify="center" align="middle">
        <Col span={10} xs={20} sm={18} md={12} lg={12} xl={12} className='font-bold md:text-left'>
          {position}
        </Col>
        <Col span={10} xs={20} sm={18} md={12} lg={12} xl={12} className='md:text-right'>
          <Badge count={years} color='#faad14' />
        </Col>
      </Row>
    </>
  )
}

const renderTech = (tool: string) => {
  return <Badge count={tool} color='#91caff' style={{color: 'rgba(0, 0, 0, 0.88)', marginRight: '2px'}} />
}

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
    {
      key: '1',
      label: renderLabel('Senior Frontend Developer @ Mindvalley', '2021 - Present'),
      children: <p>Engineering Lead at Acquisition team. Helping the team with technical solutions, stakeholder management, Jira updates and quarterly roadmap in addition to delivering features and quick fixes. Technologies used: <br />
        { renderTech('NuxtJS') }
        { renderTech('VueJS') }
        { renderTech('Storyblok') }
        { renderTech('TailwindCSS') }
        { renderTech('Google Cloud Platform') }
        { renderTech('NodeJS') }
        { renderTech('JavaScript') }
        { renderTech('SASS') }
        { renderTech('Jest') }
        { renderTech('Cypress') }
        { renderTech('GitHub') }
        { renderTech('Segment') }
        { renderTech('Cake Affiliate Marketing') }
        { renderTech('GTM') }
        { renderTech('Auth0') }
        { renderTech('Airtable') }
        </p>,
      style: panelStyle,
    },
    {
      key: '2',
      label: renderLabel('Senior Developer @ iProperty REA Group Asia', '2019 - 2021'),
      children: <p>Full stack development of web apps as part of regional web and content teams. Technologies used:<br/>
        { renderTech('TypeScript') }
        { renderTech('NextJS') }
        { renderTech('ReactJS') }
        { renderTech('NodeJS') }
        { renderTech('JavaScript') }
        { renderTech('Redux') }
        { renderTech('Apollo GraphQL') }
        { renderTech('Webpack') }
        { renderTech('Express.js') }
        { renderTech('Pug') }
        { renderTech('Nginx') }
        { renderTech('PHP') }
        { renderTech('WordPress') }
        { renderTech('MYSQL') }
        { renderTech('Laravel Zero') }
        { renderTech('Elastic Search') }
        { renderTech('AWS') }
        { renderTech('Buildkite') }
        { renderTech('Docker') }
        { renderTech('GitHub') }
        </p>,
      style: panelStyle,
    },
    {
      key: '3',
      label: renderLabel('Software Analyst @ IPG Mediabrands', '2017 - 2019'),
      children: <p>Full stack development of web apps. Technologies used: <br/>
        { renderTech('ReactJS') }
        { renderTech('KoaJS') }
        { renderTech('NodeJS') }
        { renderTech('Redux-Saga') }
        { renderTech('Webpack') }
        { renderTech('PHP') }
        { renderTech('Symfony') }
        { renderTech('PostgreSQL') }
        { renderTech('Eloquent') }
        { renderTech('Elasticsearch') }
        { renderTech('AWS') }
        { renderTech('Jenkins') }
        { renderTech('Docker') }
        { renderTech('Gitlab') }
        </p>,
      style: panelStyle,
    },
    {
      key: '4',
      label: renderLabel('Senior Software Engineer @ Litmus Labs', ' 2016 .'),
      children: <p>Full stack development of web apps. Technologies used: <br/>
        { renderTech('LAMP Stack') }
        { renderTech('Yii') }
        { renderTech('Magento2') }
        { renderTech('Codeigniter') }
        </p>,
      style: panelStyle,
    },
    {
      key: '5',
      label: renderLabel('Chief Information Officer @ Geekunit', '2014 - 2016'),
      children: <p>Performed all DevOps related tasks. Published all iOS and Android mobile apps on app store. Trained and mentored all developers. Learnt and implemented on-page SEO, financial and HR aspects.</p>,
      style: panelStyle,
    },
    {
      key: '6',
      label: renderLabel('Manager Software Engineer @ Logic-Unit', '2013 - 2014'),
      children: <p>Manage social media accounts and guide junior resources in addition to development work. Technologies used: <br/>
        { renderTech('Sencha') }
        { renderTech('PhoneGap') }
        { renderTech('Cordova') }
        { renderTech('jQuery mobile') }
        { renderTech('Android') }
        { renderTech('Visual Studio') }
        { renderTech('VS Source Control') }
        { renderTech('Node.js') }
        { renderTech('JavaScript') }
        { renderTech('PHP') }
        { renderTech('Codeigniter') }
        { renderTech('Apache') }
        { renderTech('MySQL') }
        { renderTech('Filezilla') }
        { renderTech('HTML5') }
        </p>,
      style: panelStyle,
    },
  ]

export default function Experience() {

    const {
        token: { colorBgContainer, colorFillAlter }
      } = theme.useToken()

    const onChange = (key: string | string[]) => {
        console.log(key)
      }
    const panelStyle: React.CSSProperties = {
        background: colorFillAlter
      }

    return (
        <>
            <Typography.Title level={2} className='m-0 text-center font-bold leading-0'>
              <CarTwoTone twoToneColor="#ff931f" /> Professional Experience
            </Typography.Title>

            <Collapse 
                items={getItems(panelStyle)} 
                defaultActiveKey={['1']} 
                size="large"
                style={{ background: colorBgContainer }}
                expandIconPosition="end"
                expandIcon={({ isActive }) => isActive ? <PlusOutlined/> : <MinusOutlined />}
                onChange={onChange} 
            />
        </>
    )
}