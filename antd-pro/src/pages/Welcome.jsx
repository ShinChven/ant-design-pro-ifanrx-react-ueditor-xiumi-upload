import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert } from 'antd';
import styles from './Welcome.less';
import ReactUEditor from 'ifanrx-react-ueditor';
import UEditorStyles from '@/components/UEditor/UEditor.less'; // 修正 AntDesign 与 UEditor 的宽度兼容性问题

window.UE_PATH = './plugins/ueditor';

export default () => (
  <PageHeaderWrapper>
    <Card>
      <div className={UEditorStyles.AntDesignFix}>
        <ReactUEditor
          ueditorPath={window.UE_PATH}
        />
      </div>
    </Card>
  </PageHeaderWrapper>
);
