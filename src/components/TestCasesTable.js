import React, { useState } from "react";
import { Table, Tag, Button, Input, Pagination, Checkbox, Menu, Upload } from "antd";
import { SearchOutlined, UploadOutlined, ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import "./TestCasesTable.css";

const testData = Array(4).fill({
  id: "TC-11",
  title: "Verify that users cannot set we...",
  priority: "Medium",
  result: "Not Executed",
  status: "Ready",
  owner: "Kavya",
  automationStatus: "Not Yet Automated",
  tags: ["Design", "Product", "Marketing"],
});

const TestCasesTable = () => {
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      title: <Checkbox />,
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />,
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title ",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => <Tag color="purple">{priority}</Tag>,
    },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color="green">{status}</Tag>,
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Automation Status",
      dataIndex: "automationStatus",
      key: "automationStatus",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => tags.map((tag) => <Tag key={tag}>{tag}</Tag>),
    },
  ];

  return (
    <div className="testcases-container">
      <div className="header">
        <strong className="title">Test Cases</strong>
        <div>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
          <Upload>
            <Button icon={<UploadOutlined />}></Button>
          </Upload>
        </div>
        <div className="buttons">
          <Button className="generate-btn">Generate Test Case</Button>
          <Button type="primary" className="create-btn">Create Test Case</Button>
        </div>
      </div>
      <Table
        dataSource={testData}
        columns={columns}
        pagination={false}
        rowKey="id"
      />
      <div className="pagination-container">
        <Button className="pagination-btn"><ArrowLeftOutlined />Previous</Button>
        <Pagination defaultCurrent={1} total={50} />
        <Button className="pagination-btn">Next<ArrowRightOutlined /></Button>
      </div>
    </div>
  );
};

export default TestCasesTable;