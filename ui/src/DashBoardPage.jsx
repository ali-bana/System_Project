import React, { Component } from 'react'
import { Button, Sidebar, Menu, Icon, Segment, Header, Image } from 'semantic-ui-react'

export default class SidebarExampleDimmed extends Component {
    state = { visible: false }
  
  
    handleClick = () => this.state.visible ? this.setState({ visible: false }) : this.setState({ visible: true })

    render() {
      const { visible } = this.state
  
      return (
            <div style={{textAlign:"left"}}>
                <Button onClick={this.handleClick} style={{margin : "5px"}}>
                    <Icon name='sidebar' />
                </Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={visible}
                        width='thin'>
                        <Menu.Item as='a'>
                            <Icon name='user' />
                            Profile
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='handshake' />
                            My Rents
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='home' />
                            My Houses
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='handshake outline' />
                            Other Rents
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>                       
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
};