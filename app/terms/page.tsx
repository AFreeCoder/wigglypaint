import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-bg">

      {/* 主要内容 */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          {/* 页面标题 */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-green-100">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* 内容区域 */}
          <div className="p-8 space-y-8">
            {/* 简介 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing and using WigglyPaint ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website and services. Please read these Terms carefully before using our website.
              </p>
            </section>

            {/* 服务描述 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                WigglyPaint provides creative drawing and painting tools and entertainment content. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Access to various online games and puzzles</li>
                <li>Game-related content and information</li>
                <li>User-generated content features (where applicable)</li>
                <li>Advertising-supported free gaming experience</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice.
              </p>
            </section>

            {/* 用户责任 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By using our website, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Use the website for lawful purposes only</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt the website's functionality</li>
                <li>Not use automated tools to access our services</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not engage in any activity that could harm our servers or networks</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Prohibited Activities</h4>
                <p className="text-yellow-700 text-sm">
                  You may not use our website to transmit, distribute, or store material that is illegal, harmful, threatening, abusive, or otherwise objectionable.
                </p>
              </div>
            </section>

            {/* 知识产权 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on this website, including but not limited to creative tools, graphics, text, logos, and software, is the property of WigglyPaint or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Modify or create derivative works from our content</li>
                <li>Use our trademarks or logos without written consent</li>
                <li>Reverse engineer or attempt to extract source code from our games</li>
              </ul>
            </section>

            {/* 隐私政策 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            {/* 免责声明 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Disclaimers and Limitations</h2>
              
              <h3 className="text-xl font-semibold text-gray-700 mb-3">6.1 Service Availability</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide a reliable and enjoyable gaming experience, but we cannot guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our service at any time.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">6.2 Content Accuracy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we make reasonable efforts to ensure the accuracy of information on our website, we do not warrant that all information is complete, accurate, or up-to-date.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 mb-3">6.3 Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the maximum extent permitted by law, WigglyPaint shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our website.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Important Notice</h4>
                <p className="text-red-700 text-sm">
                  Our liability is limited to the amount you paid, if any, for accessing our services. Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of these exclusions may not apply to you.
                </p>
              </div>
            </section>

            {/* 第三方内容 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Third-Party Content and Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may contain links to third-party websites, advertisements, or services. We do not endorse, control, or assume responsibility for any third-party content, privacy policies, or practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Third-party advertising services may use cookies and similar technologies to collect information about your browsing activities. Please review the privacy policies of these third-party services for more information.
              </p>
            </section>

            {/* 账户和注册 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Accounts and Registration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Currently, our games can be played without creating an account. However, if we introduce account features in the future, you may be required to register and provide certain information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            {/* 终止 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your access to our website immediately, without prior notice, for any reason, including if you breach these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Upon termination, your right to use the website will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive termination.
              </p>
            </section>

            {/* 争议解决 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Any disputes arising from these Terms or your use of our website shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit.
              </p>
            </section>

            {/* 适用法律 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            {/* 条款更新 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Your continued use of our website after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            {/* 联系我们 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Privacy Policy →
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
