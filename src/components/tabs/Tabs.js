import React from 'react'
import { TabBar } from 'antd-mobile'

class Tabs extends React.Component {
  render() {
    const tabs = this.props.data.filter(item => !item.hide)
    const { pathname } = this.props
    return (
      <TabBar> 
        { tabs.map(t => (
          <TabBar.Item 
            badge={t.path === '/message' && this.props.unread}
            key={t.text}
            title={t.text}
            icon={{uri: require(`./images/${t.icon}.png`)}}
            selectedIcon={{uri: require(`./images/${t.icon}-active.png`)}}
            selected={pathname === t.path}
            onPress={() => this.props.handleTabClick(t.path)}
          >
          </TabBar.Item>
        )) }
      </TabBar>
    )
  }
}

export default Tabs