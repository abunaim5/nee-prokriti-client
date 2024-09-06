import { Drawer } from 'antd';

const SideDrawer = ({ title, open, setOpen, drawerElem }) => {

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer title={title} onClose={onClose} open={open}>
      {drawerElem}
    </Drawer>
  );
};

export default SideDrawer;