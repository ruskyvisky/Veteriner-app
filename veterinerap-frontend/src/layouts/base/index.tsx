
import React from 'react';
import SideMenu from '@/layouts/base/components/sideMenu'
type Props = {
    children: React.ReactNode;
  };
  
  const BaseLayout = ({ children }: Props) => {
  
    return (
<div style={{flexDirection:'row' , display:'flex'}}>
    <SideMenu/>
  
  <div style={{justifyContent:'center', flexDirection:'row', alignContent:'center' }}>
            {children}
            </div>
            </div>

    );
  };
  
  export default BaseLayout;