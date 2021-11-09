import Head from 'next/head'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import styles from '../../styles/Common.module.css'
import Top from '../../components/Top'
import Link from 'next/link'

export default function AdminUser() {
    return (
        <div className={styles.container}>
            <Head>
                <title>산업안전 AI관제</title>
                <meta name="description" content="Industrial Safety AI Monitoring" />
                <link rel="icon" href="/favicon.ico" /> 
            </Head>

            <div className={styles.main}>
                <Top title=' : 관리자설정 ' />
                <div>
                    <Table celled inverted>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No</Table.HeaderCell>
                            <Table.HeaderCell>아이디</Table.HeaderCell>
                            <Table.HeaderCell>성명</Table.HeaderCell>
                            <Table.HeaderCell>생성일</Table.HeaderCell>
                            <Table.HeaderCell width='two' />
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>admin</Table.Cell>
                            <Table.Cell>관리자</Table.Cell>
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
                            <Table.HeaderCell colSpan='5'>
                           
                            <Link href='./userAdd'>
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