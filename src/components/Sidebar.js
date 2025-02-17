import { UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Menu, Dropdown, Avatar, Select } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  PlayCircleOutlined,
  DatabaseOutlined,
  SettingOutlined,
  PlusOutlined,
  DownOutlined
} from "@ant-design/icons";
import "./Sidebar.css";

const Sidebar = ({ setActiveComponent }) => {

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  const [isCreateTestOpen, setIsCreateTestOpen] = useState(true);

  return (
    <div className="sidebar">
      <div className="logo"> TB Copilot</div>

      <Select
        defaultValue="Ranjan's Project"
        style={{
          width: 200,
          marginLeft: "6%"
        }}
        onChange={() => { }}
        options={[]} />

      <Menu mode="vertical" theme="light" className="menu">
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="testPlan" icon={<FileTextOutlined />}>
          Test Plan
        </Menu.Item>
        <Menu.Item
          className="menu-item create-test"
          onClick={() => setIsCreateTestOpen(!isCreateTestOpen)}
          icon={<PlusOutlined />}
        >
          Create Test {isCreateTestOpen ? <UpOutlined className="dropdown-icon" /> : <DownOutlined className="dropdown-icon" />}
        </Menu.Item>

        {isCreateTestOpen && (
          <div className="submenu">
            <Menu.Item onClick={() => setActiveComponent("testCases")} className="submenu-item">Test Cases</Menu.Item>
            <Menu.Item onClick={() => setActiveComponent("sharedSteps")} className="submenu-item">Shared Steps</Menu.Item>
          </div>
        )}

        <Menu.Item key="testSuites" icon={<FolderOpenOutlined />}>
          Test Suites
        </Menu.Item>
        <Menu.Item key="testRun" icon={<PlayCircleOutlined />}>
          Test Run
        </Menu.Item>
        <Menu.Item key="testData" icon={<DatabaseOutlined />}>
          Test Data
        </Menu.Item>
        <Menu.Item key="integrations" icon={<SettingOutlined />}>
          Integrations
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="documentation" icon={<FileTextOutlined />}>
          View Documentation
        </Menu.Item>

      </Menu>

      <div className="user-profile">

        <Dropdown overlay={userMenu} trigger={["click"]}>
          <div className="user-info">
            <Avatar src="https://randomuser.me/api/portraits/men/45.jpg" />
            <span className="user-name">Ravikant Sanepra</span>
            <DownOutlined />
          </div>
        </Dropdown>
        <span className="user-email">ravikant@brainui.com</span>
      </div>
    </div>
  );
};

export default Sidebar;