import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card,} from 'antd';
import ReactUEditor from '@/components/UEditor/UEditor'; // 使用重载过的 ifanrx-react-ueditor 以加载秀米插件
import UEditorStyles from '@/components/UEditor/UEditor.less'; // 修正 AntDesign 与 UEditor 的宽度兼容性问题


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
