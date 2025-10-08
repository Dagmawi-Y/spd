export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            SPD © 2025 | Made by Daggy
          </div>
          
          {/* Contact Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://t.me/daggy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
            >
              Telegram
            </a>
            <a
              href="mailto:daggy@example.com"
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}