/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/25/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Space } from 'antd';

function ModalNote({ open, setOpen, dataInvoice }) {

	const onClick = () => {
		setOpen({});
	};

	const device = dataInvoice.device || "";
	const workTime = dataInvoice.workTime || "";
	const name = dataInvoice.name || "";
	const amountOfMoney = dataInvoice.amountOfMoney || "vnđ";
	const fees = dataInvoice.fees || "vnđ";
	const bankFees = dataInvoice.bankFees || "vnđ";
	const interestRate = dataInvoice.interestRate || "vnđ";
	const note = dataInvoice.note || "";

	return(
	    <Modal
		    title="Thông tin chi tiết"
		    centered
		    open={open}
		    width={600}
		    onOk={onClick}
		    onCancel={onClick}
		    footer={
			    <Button onClick={onClick} danger>Đóng</Button>
		    }
	    >
		    <p>Tên thiết bị: {device}</p>
		    <p>Thời gian làm: {workTime}</p>
		    <p>Chủ thẻ: {name}</p>
		    <p>Số tiền nhận từ khách: {amountOfMoney}</p>
		    <p>Phí thu: {fees}</p>
		    <p>Phí ngân hàng: {bankFees}</p>
		    <p>Lãi: {interestRate}</p>
		    <p>Note: {note}</p>
	    </Modal>
    );
}

ModalNote.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func,
	dataInvoice: PropTypes.object,
};

ModalNote.defaultProps = {
	open: false,
	dataInvoice: {},
};

export default React.memo(ModalNote);
