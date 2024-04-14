import React, { useState } from 'react'
import { Modal } from 'antd'
import Layout from './../components/layouts/Layout'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      <div className="filters">
        <div>Range filters</div>
        <div>
          <button className="btn btn-primary" onclick={() => setShowModal(true)}>Add new</button>
        </div>
      </div>
      <div className="content"></div>
      <Modal
        title="Add Transaction"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <h1>hello</h1>
      </Modal>
    </Layout >
  )
}

export default HomePage