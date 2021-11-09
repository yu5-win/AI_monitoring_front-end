import Head from 'next/head'
import Link from 'next/link'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import styles from '../../styles/Common.module.css'
import Top from '../../components/Top'

export default function AdminDevice() {
    return (
        <div className={styles.container}>
            <Head>
                <title>산업안전 AI관제</title>
                <meta name="description" content="Industrial Safety AI Monitoring" />
                <link rel="icon" href="/favicon.ico" /> 
            </Head>

            <div className={styles.main}>
                <Top title=' : 장비관리 ' />
                <div>
                    <Table celled inverted>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No</Table.HeaderCell>
                            <Table.HeaderCell>Serial No</Table.HeaderCell>
                            <Table.HeaderCell>장치명</Table.HeaderCell>
                            <Table.HeaderCell>착용자</Table.HeaderCell>
                            <Table.HeaderCell>생성일</Table.HeaderCell>
                            <Table.HeaderCell width='two' />
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>43abs5679ghxx</Table.Cell>
                            <Table.Cell>스마트밴드</Table.Cell>
                            <Table.Cell>김수영</Table.Cell>
                            <Table.Cell>2021.09.02</Table.Cell>
                            <Table.Cell>                      
                                <Button icon>
                                    <Icon name='pencil' />
                                </Button>
                                <Button icon>
                                    <Icon name='trash' />
                                </Button>                               
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>2</Table.Cell>
                            <Table.Cell>32255568bcx</Table.Cell>
                            <Table.Cell>웨어러블장치</Table.Cell>
                            <Table.Cell>김수영</Table.Cell>
                            <Table.Cell>2021.09.02</Table.Cell>
                            <Table.Cell>                      
                                <Button icon>
                                    <Icon name='pencil' />
                                </Button>
                                <Button icon>
                                    <Icon name='trash' />
                                </Button>                               
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>3</Table.Cell>
                            <Table.Cell>456987weixx43</Table.Cell>
                            <Table.Cell>스마트밴드</Table.Cell>
                            <Table.Cell>홍길동</Table.Cell>
                            <Table.Cell>2021.09.02</Table.Cell>
                            <Table.Cell>                      
                                <Button icon>
                                    <Icon name='pencil' />
                                </Button>
                                <Button icon>
                                    <Icon name='trash' />
                                </Button>                               
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>4</Table.Cell>
                            <Table.Cell>32255568bax</Table.Cell>
                            <Table.Cell>웨어러블장치</Table.Cell>
                            <Table.Cell>홍길동</Table.Cell>
                            <Table.Cell>2021.09.02</Table.Cell>
                            <Table.Cell>                      
                                <Button icon>
                                    <Icon name='pencil' />
                                </Button>
                                <Button icon>
                                    <Icon name='trash' />
                                </Button>                               
                            </Table.Cell>
                        </Table.Row>
                       
                        </Table.Body>

                        <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='8'>
                            <Link href='./deviceAdd'>
                                <Button
                                        floated='left'
                                        icon
                                        labelPosition='left'
                                        primary
                                        size='large'
                                    >
                                    <Icon name='user plus' />추가
                                </Button>
                            </Link>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>


                            </Table.HeaderCell>
                        </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            </div>
        </div>
    )
}