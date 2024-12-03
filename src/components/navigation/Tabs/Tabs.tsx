import React from 'react'
import { TabsContainer, TabList, TabItem } from './Tabs.styles'

export interface TabsProps {
  tabs: Array<{
    id: string
    label: string
  }>
  activeTab: string
  onChange: (tabId: string) => void
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className
}) => {
  return (
    <TabsContainer className={className}>
      <TabList>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </TabItem>
        ))}
      </TabList>
    </TabsContainer>
  )
}
