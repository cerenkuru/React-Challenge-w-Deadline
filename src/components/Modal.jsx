// import { createPortal } from 'react-dom';
// import {motion} from 'framer-motion'
// export default function Modal({ title, children, onClose }) {


//   return createPortal(
//     <>
//       <motion.div className="backdrop" onClick={onClose} />
//       <motion.dialog 
//       variants={{
//         hidden: {opacity: 0 , y: 30},
//         visible: {opacity: 1 , y: 0}
//       }}
//       initial="hidden"
//       animate="visible"
//       exit="hidden"
//       open 
//       className="modal">
//         <h2>{title}</h2>
//         {children}
//       </motion.dialog>
//     </>,
//     document.getElementById('modal')
//   );
// }


import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <motion.div className="backdrop" onClick={onClose}  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} />
      <motion.dialog 
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: 30 }}
       open 
       className="modal"
       onMouseDown={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
