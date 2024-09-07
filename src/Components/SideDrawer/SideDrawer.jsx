import { Drawer } from 'antd';

const SideDrawer = ({ title, place, open, setOpen, drawerElem }) => {

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer title={title} placement={place} onClose={onClose} open={open}>
      {drawerElem}
    </Drawer>
  );
};

export default SideDrawer;