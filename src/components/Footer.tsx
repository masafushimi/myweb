import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">株式会社エイチ</h3>
            <p className="text-gray-300">東京都港区新橋2-16-1 ニュー新橋ビル903</p>
            <p className="text-gray-300">KEY STATION OFFICE</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-2">© {new Date().getFullYear()} 株式会社エイチ All Rights Reserved.</p>
            <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
