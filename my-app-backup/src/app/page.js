export default function Hello() {
  return (
    <div>
      <h1 style={{
        color: 'red',
        textAlign: 'center',
        width: '100%',
        margin: '20px 0', 
        textShadow: '3px 3px 6px rgba(128, 128, 128, 0.8)',
        border: '2px solid #ccc',  /* 2px宽的实线灰色边框 */
        padding: '10px',          /* 内边距使边框与文字有空间 */
        backgroundColor: '#f0f0f0' /* 新增灰色内填充背景（#f0f0f0是浅灰色） */
      }}>Hello
      </h1>
    </div>
  );
}