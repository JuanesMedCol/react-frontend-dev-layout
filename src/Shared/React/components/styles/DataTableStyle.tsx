export const DataTableStyle = {
    headRow: {
      style: {
        border: 'none',
      },
    },
    headCells: {
      style: {
        backgroundColor: 'rgb(36, 63, 89)',
        color: 'rgb(103, 181, 221)',
        fontWeight: 'bold',
        fontSize: '16px',
        borderRight: '2px solid #E5E7EB'
      },
    },
    rows: {
      style:{
        padding: '10px',
        height: 'max-content',

      },
      highlightOnHoverStyle: {
        backgroundColor: 'rgb(103, 181, 221, 0.25)',
        borderBottom: 'none'
      },
      stripedStyle: {
        backgroundColor: 'rgb(242, 242, 242)',
        borderBottom: 'none'
      },
    },
    cells:{
      style:{
        borderRight: '2px solid #E5E7EB',
        fontSize: '16px',
        lineHeight: '28px',
      }
    },
    pagination: {
      style: {
        marginTop: '0.5rem',
        borderRadius: '0.5rem',
      },
    },
  };