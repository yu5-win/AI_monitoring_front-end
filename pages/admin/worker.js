import Head from 'next/head'
import Link from 'next/link'
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react'
import styles from '../../styles/Common.module.css'
import Top from '../../components/Top'

export default function AdminWorker() {
    return (
        <div className={styles.container}>
            <Head>
                <title>산업안전 AI관제</title>
                <meta name="description" content="Industrial Safety AI Monitoring" />
                <link rel="icon" href="/favicon.ico" /> 
            </Head>

            <div className={styles.main}>
                <Top title=' : 작업자관리 ' />
                <div>
                    <Table celled inverted>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No</Table.HeaderCell>
                            <Table.HeaderCell>이름</Table.HeaderCell>
                            <Table.HeaderCell>나이</Table.HeaderCell>
                            <Table.HeaderCell>부서</Table.HeaderCell>
                            <Table.HeaderCell>작업장</Table.HeaderCell>
                            <Table.HeaderCell>장비</Table.HeaderCell>
                            <Table.HeaderCell>생성일</Table.HeaderCell>
                            <Table.HeaderCell width='two' />
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>김수영</Table.Cell>
                            <Table.Cell>28세</Table.Cell>
                            <Table.Cell>제조1팀</Table.Cell>
                            <Table.Cell>1층</Table.Cell>
                            <Table.Cell>O</Table.Cell>
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
                            <Table.Cell>홍길동</Table.Cell>
                            <Table.Cell>32세</Table.Cell>
                            <Table.Cell>제조1팀</Table.Cell>
                            <Table.Cell>2층</Table.Cell>
                            <Table.Cell>O</Table.Cell>
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
                            <Table.Cell>황의조</Table.Cell>
                            <Table.Cell>38세</Table.Cell>
                            <Table.Cell>제조1팀</Table.Cell>
                            <Table.Cell>1층</Table.Cell>
                            <Table.Cell>X</Table.Cell>
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
                            <Table.Cell>정의훈</Table.Cell>
                            <Table.Cell>26세</Table.Cell>
                            <Table.Cell>제조1팀</Table.Cell>
                            <Table.Cell>1층</Table.Cell>
                            <Table.Cell>O</Table.Cell>
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
                            <Link href='./workerAdd'>
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