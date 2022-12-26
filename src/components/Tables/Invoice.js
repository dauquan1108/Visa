/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/24/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Popconfirm } from "antd";

// Component
import ModalNote from "./ModalNote";

// Styles
import styles from './Styles/index.less';

// Img
import note from '../Img/notes.png';

const data = [
	{
		key: "1",

		device: 'Thiết bị 1', // Post làm
		workTime: '24/12/2022', // Ngày làm
		name: "An Giang", // Chủ thẻ
		cardNumber: '1', // Số thẻ
		amountOfMoney: '100,000,000 vnđ', // Số tiền
		bankingFee: '1,32', // % Phí ngân hàng
		bankFees: '300,000 vnđ', // Phí ngân hàng
		customerCharge: '1.8', // % Phí thu khác
		fees: '620,000 vnđ', // Phí thu
		interestRate: '320,000 vnđ', // Lãi
		note: 'Đã xác nhận',
		tag: ["Đáo"],
	},
	{
		key: "2",
		device: 'Thiết bị 2',
		workTime: '24/12/2022',
		name: "Bà rịa – Vũng tàu",
		cardNumber: '2',
		amountOfMoney: '80,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '300,000 vnđ',
		customerCharge: '1.8',
		fees: '560,000 vnđ',
		interestRate: '260,000 vnđ',
		note: 'Đã xác nhận',
		tag: ["Đáo"],
	},
	{
		key: "3",
		device: 'Thiết bị 3',
		workTime: '24/12/2022',
		name: "Bắc Giang",
		cardNumber: '3',
		amountOfMoney: '10,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '300,000 vnđ',
		customerCharge: '1.8',
		fees: '490,000 vnđ',
		interestRate: '190,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Đáo"],
	},
	{
		key: "4",
		device: 'Thiết bị 4',
		workTime: '24/12/2022',
		name: "Bắc Kạn",
		cardNumber: '4',
		amountOfMoney: '90,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '200,000 vnđ',
		customerCharge: '1.8',
		fees: '400,000 vnđ',
		interestRate: '200,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Đáo"],
	},
	{
		key: "5",
		device: 'Thiết bị 5',
		workTime: '24/12/2022',
		name: "Bạc Liêu",
		cardNumber: '5',
		amountOfMoney: '70,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '330,000 vnđ',
		customerCharge: '1.8',
		fees: '660,000 vnđ',
		interestRate: '330,000 vnđ',
		note: 'Xác nhận đáo',
		tag: ["Rút tiền"],
	},
	{
		key: "6",
		device: 'Thiết bị 6',
		workTime: '24/12/2022',
		name: "Bắc Ninh",
		cardNumber: '6',
		amountOfMoney: '60,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '290,000 vnđ',
		customerCharge: '1.8',
		fees: '500,000 vnđ',
		interestRate: '110,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Rút tiền"],
	},
	{
		key: "7",
		device: 'Thiết bị 7',
		workTime: '24/12/2022',
		name: "Bến Tre",
		cardNumber: '7',
		amountOfMoney: '50,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '350,000 vnđ',
		customerCharge: '1.8',
		fees: '560,000 vnđ',
		interestRate: '210,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Rút tiền"],
	},
	{
		key: "8",
		device: 'Thiết bị 8',
		workTime: '24/12/2022',
		name: "Bình Định",
		cardNumber: '8',
		amountOfMoney: '140,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '200,000 vnđ',
		customerCharge: '1.8',
		fees: '450,000 vnđ',
		interestRate: '250,000 vnđ',
		note: 'Xác nhận đáo',
		tag: ["Đáo"],
	},
	{
		key: "9",
		device: 'Thiết bị 9',
		workTime: '24/12/2022',
		name: "Cà Mau",
		cardNumber: '9',
		amountOfMoney: '35,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '360,000 vnđ',
		customerCharge: '1.8',
		fees: '630,000 vnđ',
		interestRate: '230,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Đáo"],
	},
	{
		key: "10",
		device: 'Thiết bị 10',
		workTime: '24/12/2022',
		name: "Cần Thơ",
		cardNumber: '10',
		amountOfMoney: '30,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '300,000 vnđ',
		customerCharge: '1.8',
		fees: '630,000 vnđ',
		interestRate: '330,000 vnđ',
		note: 'Ok đã đáo',
		tag: ["Rút tiền"],
	},
	{
		key: "11",
		device: 'Thiết bị 11',
		workTime: '24/12/2022',
		name: "Hải Phòng",
		cardNumber: '11',
		amountOfMoney: '33,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '320,000 vnđ',
		customerCharge: '1.8',
		fees: '540,000 vnđ',
		interestRate: '220,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Đáo"],
	},
	{
		key: "12",
		device: 'Thiết bị 12',
		workTime: '24/12/2022',
		name: "Hậu Giang",
		cardNumber: '12',
		amountOfMoney: '35,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '380,000 vnđ',
		customerCharge: '1.8',
		fees: '580,000 vnđ',
		interestRate: '200,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Đáo"],
	},
	{
		key: "13",
		device: 'Thiết bị 13',
		workTime: '24/12/2022',
		name: "Thành phố Hồ Chí Minh",
		cardNumber: '13',
		amountOfMoney: '4,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '390,000 vnđ',
		customerCharge: '1.8',
		fees: '590,000 vnđ',
		interestRate: '200,000 vnđ',
		note: 'Xác nhận đáo',
		tag: ["Rút tiền"],
	},
	{
		key: "14",
		device: 'Thiết bị 14',
		workTime: '24/12/2022',
		name: "Lâm Đồng",
		cardNumber: '14',
		amountOfMoney: '90,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '400,000 vnđ',
		customerCharge: '1.8',
		fees: '800,000 vnđ',
		interestRate: '400,000 vnđ',
		note: 'Đã xác nhận đáo',
		tag: ["Đáo"],
	},
	{
		key: "15",
		device: 'Thiết bị 15',
		workTime: '24/12/2022',
		name: "Kon Tum",
		cardNumber: '15',
		amountOfMoney: '50,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '230,000 vnđ',
		customerCharge: '1.8',
		fees: '400,000 vnđ',
		interestRate: '170,000 vnđ',
		note: 'Xác nhận đáo',
		tag: ["Rút tiền"],
	},
	{
		key: "16",
		device: 'Thiết bị 16',
		workTime: '24/12/2022',
		name: "Hòa Bình",
		cardNumber: '16',
		amountOfMoney: '20,000,000 vnđ',
		bankingFee: '1,32',
		bankFees: '20,000 vnđ',
		customerCharge: '1.8',
		fees: '30,000 vnđ',
		interestRate: '10,000 vnđ',
		note: 'Xác nhận đáo',
		tag: ["Đáo"],
	}
];

function Invoice() {
	const [searchText, setSearchText] = React.useState("");
	const [searchedColumn, setSearchedColumn] = React.useState("");
	const searchInput = React.useRef(null);

	// Đóng mở Modal
	const [dataInvoice, setDataInvoice] = React.useState({});


	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters, selectedKeys, confirm, dataIndex) => {
		clearFilters();
		setSearchText("");

		// Clear
		handleSearch(selectedKeys, confirm, dataIndex);
	};

	const getColumnSearchProps = (dataIndex, title) => ({
		filterDropdown: ({
             setSelectedKeys,
             selectedKeys,
             confirm,
             clearFilters,
             close
		}) => (
			<div
				style={{
					padding: 8
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					ref={searchInput}
					placeholder={`Tìm kiếm theo ${title}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: "block"
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{
							width: 100
						}}
					>
						Tìm kiếm
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters, selectedKeys, confirm, dataIndex)}
						size="small"
						style={{
							width: 100
						}}
					>
						Xóa tìm kiếm
					</Button>
					{/*<Button*/}
					{/*	type="link"*/}
					{/*	size="small"*/}
					{/*	onClick={() => {*/}
					{/*		confirm({*/}
					{/*			closeDropdown: false*/}
					{/*		});*/}
					{/*		setSearchText(selectedKeys[0]);*/}
					{/*		setSearchedColumn(dataIndex);*/}
					{/*	}}*/}
					{/*>*/}
					{/*	Lọc*/}
					{/*</Button>*/}
					<Button
						type="link"
						size="small"
						onClick={() => {
							close();
						}}
					>
						Đóng
					</Button>
				</Space>
			</div>
		),

		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? "#1890ff" : undefined
				}}
			/>
		),

		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},

		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: "#ffc069",
						padding: 0
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			)
	});


	const onClickNote = (record) => {
		setDataInvoice(record);
	};


	const columns = [
		{
			title: "Tên thiết bị",
			dataIndex: "device",
			key: "device",
			// width: "12%",
			...getColumnSearchProps("device", "tên thiết bị"),
			sorter: (a, b) => a.device.length - b.device.length,
			sortDirections: ["descend", "ascend"]
		},
		{
			title: "Ngày làm",
			dataIndex: "workTime",
			key: "workTime",
			// width: "8%"
		},
		{
			title: "Chủ thẻ",
			dataIndex: "name",
			key: "name",
			// width: "15%",
			...getColumnSearchProps("name", "chủ thẻ"),
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ["descend", "ascend"]
		},
		{
			title: "Số thẻ",
			dataIndex: "cardNumber",
			key: "cardNumber",
			// width: "10%"
		},
		{
			title: "Số tiền",
			dataIndex: "amountOfMoney",
			key: "amountOfMoney",
			// width: "10%"
		},
		{
			title: "% Phí ngân hàng",
			dataIndex: "bankingFee",
			key: "bankingFee",
			// width: "10%"
		},
		{
			title: "Phí ngân hàng",
			dataIndex: "bankFees",
			key: "bankFees",
			// width: "10%"
		},
		{
			title: "% Phí thu khách",
			dataIndex: "customerCharge",
			key: "customerCharge",
			// width: "9%"
		},
		{
			title: "Phí thu",
			dataIndex: "fees",
			key: "fees",
			// width: "10%"
		},
		{
			title: "Lãi",
			dataIndex: "interestRate",
			key: "interestRate",
			// width: "15%"
		},
		{
			title: "Hình thức",
			key: "tag",
			dataIndex: "tag",
			// sorter: (a, b) => a.tag.length - b.tag.length,
			render: (_, { tag }) => (
				<>
					{tag.map((tag) => {
						let color = tag.length > 5 ? "geekblue" : "green";
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: "Note",
			Key: "Note",
			dataIndex: "Note",
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => onClickNote(record)}>
						<img src={note} alt='note' width="20px" />
					</a>
				</Space>
			),
		},
		{
			title: "operation",
			key: "operation",
			dataIndex: "operation",
			render: (_, record) =>
				data.length >= 1 ? (
					<Popconfirm
						title="Sure to delete?"
						// onConfirm={() => handleDelete(record.key)}
					>
						<a>Delete</a>
					</Popconfirm>
				) : null
		},
	];

    return(
    	<div className={styles.wrapInvoice}>
		    <Table columns={columns} dataSource={data} />
		    <ModalNote open={Object.values(dataInvoice).length !== 0} setOpen={onClickNote} dataInvoice={dataInvoice} />
	    </div>
    );
}

Invoice.propTypes = {};

Invoice.defaultProps = {};

export default Invoice;
