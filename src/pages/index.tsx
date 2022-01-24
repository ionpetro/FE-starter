import type { NextPage } from 'next';
import { Button, Tooltip } from 'antd';
import Test from '@components/Test/Test';

const Home: NextPage = () => {
  return (
    <div>
      <Tooltip title="test">
        <Button type="ghost">test</Button>
      </Tooltip>
      <Test />
    </div>
  );
};

export default Home;
