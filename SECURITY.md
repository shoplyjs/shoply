# Security Policy for ShoplyJS

## Reporting a Vulnerability

If you discover a vulnerability or security issue within ShoplyJS, we encourage you to report it as soon as possible. To ensure the issue is addressed promptly, please follow the steps below:

### 1. **Do not open a GitHub issue or public discussion about the vulnerability.**
   - To protect both users and contributors, vulnerabilities should not be publicly disclosed until they are resolved.

### 2. **Email us the details.**
   - Please email the security team at: [security@shoplyjs.com]
   - Include the following information in your report:
     - Description of the vulnerability
     - Steps to reproduce the issue (if applicable)
     - Any suggested fixes (if available)

### 3. **We will review your report.**
   - Once we receive your report, we will prioritize it based on its severity and take appropriate action. Our response time may vary depending on the complexity of the issue.

### 4. **Coordination and Resolution.**
   - We will notify you when we have a fix or a mitigation plan and may work with you to coordinate the public disclosure.

## Supported Versions

We will support and provide security updates for the latest stable version of ShoplyJS. If a critical vulnerability is discovered in an older version, we will consider issuing a patch or a fix, depending on the severity of the issue.

| Version       | Supported         |
| ------------- | ----------------- |
| `1.x.x`       | :x: |
| `2.x.x`       | :white_check_mark: |
| `3.x.x`       | :white_check_mark:               |

> **Note:** Older versions may no longer receive support or security updates. We recommend upgrading to the latest stable version to benefit from security patches and improvements.

## Security Best Practices

While we work to keep ShoplyJS secure, there are several security best practices we recommend to users:

1. **Keep Dependencies Up to Date.**
   - Regularly check and update your dependencies to ensure that you are not using outdated libraries with known vulnerabilities.

1. **Secure Your API Endpoints.**
   - Ensure your API endpoints are secured with appropriate authentication (e.g., OAuth2, JWT) and are protected from common attacks such as SQL injection, XSS, and CSRF.

1. **Use HTTPS.**
   - Always use HTTPS to encrypt data in transit between the client and server.

1. **Regular Security Audits.**
   - Regularly audit your codebase and infrastructure for potential security vulnerabilities.

## License

By contributing to this project, you agree to abide by the project's license (typically [MIT License](https://opensource.org/licenses/MIT)). Vulnerability reports will not be considered contributions, and reporting a security issue does not imply that you agree to be bound by the terms of the license.

## Acknowledgements

We appreciate your efforts in keeping ShoplyJS secure. If you help identify a vulnerability, we will recognize your contribution in the changelog or in our acknowledgment list (with your consent).
