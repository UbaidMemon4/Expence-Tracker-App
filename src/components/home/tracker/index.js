import "./index.css";
import React, { useState } from "react";
import { Button, Card, Form, Input, Modal } from "antd";
import { addTracker, onEdit, onDelete } from "../../../store/expenceSlice";
import { useDispatch, useSelector } from "react-redux";

const Tracker = () => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const trackerList = useSelector((s) => s.tracker);

  const [trackerId, setTrackerId] = useState("");
  const onFinish = (values) => {
    setIsModalOpen(false);

    if (trackerId) {
      const update = {
        ...values,
        id: trackerId,
      };
      dispatch(onEdit(update));
    } else {
      dispatch(addTracker(values));
    }
    setTrackerId("");
    setIsModalOpen(false);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onClickEdit = (s) => {
    setIsModalOpen(true);
    setTrackerId(s.id);
    form.setFieldsValue({
      title: s.title,
      description: s.description,
      amount: s.amount,
    });
    dispatch(onEdit(s.id));
  };
  const onClickDelete = (id) => {
    dispatch(onDelete(id));
  };
  return (
    <>
      <Button type="primary" onClick={showModal} className="modal_but">
        Add Expences
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <div className="modal-head">
          <h1>Add Expence</h1>
        </div>

        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tile"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: "Please input your amount!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className="form-button">
              <Button type="primary" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {trackerId ? "Update" : "Submit"}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
      <div>
        {trackerList.map((t) => {
          return (
            <div>
              <div key={t.id} className="trackor-container">
                <Card title="Tracker" bordered={false} className="boder">
                  <p>
                    <b>Title : </b>
                    {t.title}
                  </p>
                  <p>
                    <b>Description : </b>
                    {t.description}
                  </p>
                  <p>
                    <b>Amount : </b>
                    {t.amount}
                  </p>
                  <div className="trackor-button">
                    <Button type="primary" onClick={() => onClickEdit(t)}>
                      Edit
                    </Button>
                    <Button type="primary" onClick={() => onClickDelete(t.id)}>
                      Delete
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Tracker;
