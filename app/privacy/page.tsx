import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg">

      {/* 主要内容 */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          {/* 页面标题 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-blue-100">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* 内容区域 */}
          <div className="p-8 space-y-8">
            {/* 简介 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to WigglyPaint ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our creative tools.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our website.
              </p>
            </section>

            {/* 信息收集 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our games are designed to be played without requiring personal information. You can enjoy our games without creating an account or providing any personal data.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>IP address and general location information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device type and screen resolution</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
              </ul>
            </section>

            {/* Cookie 政策 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Cookie Policy</h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">3.1 What Are Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow us to improve our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">3.2 How We Use Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Advertising Cookies:</strong> Used by third-party advertising services to display relevant ads</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">3.3 Third-Party Advertising Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website displays advertisements from third-party advertising services. These services may use cookies to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Display personalized advertisements based on your interests</li>
                <li>Track the effectiveness of advertising campaigns</li>
                <li>Prevent the same advertisement from being shown repeatedly</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                These third-party services have their own privacy policies and cookie practices. We encourage you to review their policies.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">3.4 Managing Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Cookie Consent</h4>
                <p className="text-blue-700 text-sm">
                  By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings.
                </p>
              </div>
            </section>

            {/* 信息使用 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide and maintain our gaming services</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website usage and performance</li>
                <li>Display relevant advertisements</li>
                <li>Ensure website security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* 信息共享 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Third-Party Advertising Services:</strong> We may share non-personal information with advertising partners to display relevant ads</li>
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
              </ul>
            </section>

            {/* GDPR 合规 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights Under GDPR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA), you have certain rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Right to Access:</strong> Request information about the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we process your data</li>
                <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* 数据安全 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* 儿童隐私 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            {/* 政策更新 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            {/* 联系我们 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> [Contact information coming soon]<br />
                  <strong>Address:</strong> [Your Business Address]<br />
                  <strong>Response Time:</strong> We will respond to your inquiry within 30 days
                </p>
              </div>
            </section>

            {/* 底部链接 */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Terms of Service →
                </Link>
                <Link href="/" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Back to Game
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 
