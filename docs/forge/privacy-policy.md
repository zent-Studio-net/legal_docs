# Privacy Policy

**Effective Date:** August 19, 2026
**Last Updated:** August 19, 2026

Zent Labs ("Zent Labs," "we," "us," or "our"), a company organized in the United States, operates the Forge mobile application (the "App," "Forge," or "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use the App, and describes the choices and rights available to you.

By downloading, installing, or using Forge, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use the App.

If you have questions or requests regarding this policy or your personal data, contact us at **zent.support@zentstudio.net**.

---

## Table of Contents

1. [Scope of This Policy](#1-scope-of-this-policy)
2. [Information We Collect](#2-information-we-collect)
3. [How We Use Information](#3-how-we-use-information)
4. [End-to-End Encryption: What We Can and Cannot See](#4-end-to-end-encryption-what-we-can-and-cannot-see)
5. [Local (On-Device) Storage](#5-local-on-device-storage)
6. [Guest Mode](#6-guest-mode)
7. [How We Share Information](#7-how-we-share-information)
8. [Third-Party Services](#8-third-party-services)
9. [Push Notifications](#9-push-notifications)
10. [Biometric Data](#10-biometric-data)
11. [Data Retention](#11-data-retention)
12. [Data Security](#12-data-security)
13. [International Data Transfers](#13-international-data-transfers)
14. [Your Rights and Choices](#14-your-rights-and-choices)
15. [Children's Privacy](#15-childrens-privacy)
16. [Regional Disclosures](#16-regional-disclosures)
17. [Account Deletion](#17-account-deletion)
18. [Changes to This Policy](#18-changes-to-this-policy)
19. [Contact Us](#19-contact-us)

---

## 1. Scope of This Policy

This Policy applies to information collected through:

- The Forge mobile application (iOS and Android)
- Any related backend services operated by us that the App communicates with ("forge_mw")
- Communications between you and us (support requests, emails)

This Policy does **not** apply to third-party websites, products, or services that may be linked from within the App, or to the practices of third parties we do not control (e.g., Apple, Google, RevenueCat), except as described in [Section 8](#8-third-party-services).

---

## 2. Information We Collect

### 2.1 Information You Provide Directly

| Category | Examples | When Collected |
|---|---|---|
| **Account credentials** | Email address; account password (if you choose password sign-up); one-time passcodes | Sign-up, sign-in |
| **Profile information** | Display name, profile avatar/photo | Account setup, profile edits |
| **Project content** | Project titles, descriptions, idea board entries, comments, reactions, canvas sticky notes | Normal use of the App |
| **Task/feature-tracker content** | Task titles, descriptions, statuses, priorities, checklist items, due dates | Normal use of the App |
| **Meeting information** | Meeting titles, times, recurrence rules, attendee lists | Scheduling meetings |
| **Collaborator information** | Email addresses of people you invite to a project; their role/permissions | Inviting collaborators |
| **Contacts you create in-app** | Name, email, phone number, notes you manually enter into the App's Contacts feature | Adding a contact |
| **Stored credentials (Credentials feature)** | Platform name, username, and optionally a password you choose to store for a third-party service | Adding a credential to a project |
| **Project links and client records** | URLs, link labels, client names/details you add to a project | Normal use of the App |
| **Communications** | Content of support emails or messages you send us | When you contact us |
| **Purchase-related information** | Subscription tier, purchase history (via RevenueCat) | In-app purchase |

### 2.2 Information Collected Automatically

| Category | Examples |
|---|---|
| **Device information** | Device model, operating system and version, unique device/installation identifiers, app version |
| **Usage information** | Feature interactions, screens viewed, crash logs, general diagnostic/performance data |
| **Network information** | IP address (processed transiently by our backend and infrastructure providers for request handling and security; not stored long-term against your identity beyond standard server logs) |
| **Push notification tokens** | Device push token (APNs for iOS, FCM for Android) used to deliver notifications |

We do **not** currently use third-party advertising SDKs, and we do not sell your data to data brokers or advertisers.

### 2.3 Information From Third Parties

| Source | What We Receive |
|---|---|
| **Sign in with Apple** | Apple-provided identity token; name and email if you choose to share them (Apple may provide a private relay email) |
| **Sign in with Google** | Google-provided identity token; name and email associated with your Google account |
| **RevenueCat** | Subscription status and entitlement information tied to your purchase |

### 2.4 Sensitive Information We Do Not Collect

We do not knowingly collect government ID numbers, financial account numbers, precise geolocation, health information, or biometric identifiers on our servers. Biometric authentication (Face ID / fingerprint) is processed entirely on-device — see [Section 10](#10-biometric-data).

---

## 3. How We Use Information

We use the information we collect to:

1. **Provide the Service** — create and manage your account, sync your projects/tasks/ideas/meetings/contacts/credentials across your devices, and enable collaboration features.
2. **Enable collaboration** — deliver invitations, share project access, and notify collaborators of activity.
3. **Secure your account** — authenticate sign-in attempts, detect and prevent fraud or abuse, support account recovery.
4. **Communicate with you** — send one-time passcodes, transactional emails (invitations, account notices), and respond to support requests.
5. **Send push notifications** — activity alerts, meeting reminders, and collaboration updates you have not disabled (see [Section 9](#9-push-notifications)).
6. **Process payments and subscriptions** — via RevenueCat, to manage your subscription tier and entitlements.
7. **Maintain and improve the App** — diagnose bugs, monitor performance and stability, and understand feature usage in aggregate.
8. **Comply with legal obligations** — respond to lawful requests, enforce our Terms of Service, and protect our rights and the rights of users.

We do **not** use the content of your encrypted project data (titles, descriptions, ideas, tasks, credentials, etc. — see [Section 4](#4-end-to-end-encryption-what-we-can-and-cannot-see)) for advertising, profiling, or any purpose other than transmitting and storing it on your behalf, because we cannot read it.

---

## 4. End-to-End Encryption: What We Can and Cannot See

Forge is built with end-to-end encryption ("E2EE") for the substantive content you create.

### 4.1 What Is Encrypted

The following content is encrypted on your device before it ever leaves it, using per-project data encryption keys ("DEKs") that are themselves wrapped by your personal keypair:

- Project titles and descriptions
- Idea board entries and comments
- Task/feature-tracker titles, descriptions, and checklist items
- Meeting titles
- Stored credentials (platform, username, password)
- Canvas sticky note content

Our servers store only the encrypted ciphertext for these fields. We do not hold the keys needed to decrypt this content in ordinary operation, and Zent Labs personnel cannot read it.

### 4.2 What Is Not Encrypted

Certain metadata **is not** end-to-end encrypted, because the App and backend need it in plain form to function (e.g., to route notifications, enforce permissions, or display timestamps):

- Email addresses of account holders and invited collaborators
- Project membership/role (who has access to what)
- Timestamps (created/updated/completed dates)
- Numeric/boolean flags such as task status, priority level, upvote counts
- Contact names/emails/phone numbers stored via the Contacts feature (encrypted with a per-user key, not visible to other users, but technically distinct from project-level E2EE — see 4.3)

### 4.3 Key Backup and Recovery

To prevent permanent data loss if you lose your device, your private key material is backed up in encrypted form to our servers, protected by a 12-word recovery phrase that only you see, once, at setup. We store only this encrypted ("locked") blob — we do not store your recovery phrase, and we cannot derive it. **If you lose both your device and your recovery phrase, encrypted content protected by that key cannot be recovered by us or by you.**

### 4.4 Server-Held Escrow Key (Invite Delivery)

To let a newly invited collaborator access a shared project immediately (without waiting for another device to come online), a copy of each project's DEK is also wrapped against a server-held key pair and stored temporarily so it can be re-wrapped for the new collaborator upon acceptance. The corresponding private key is held only on our backend infrastructure, never on client devices, and is used solely to facilitate this one-time key handoff.

### 4.5 Practical Implication

Because of E2EE, we generally cannot view, search, index, or use for any purpose the substantive content of your projects, ideas, tasks, meetings, or stored credentials. We are also unable to recover this content on your behalf if you lose access to your encryption keys, other than through the recovery-phrase mechanism described above.

---

## 5. Local (On-Device) Storage

To support offline use, the App maintains a local SQLite database on your device containing a decrypted copy of your own data (projects, ideas, tasks, meetings, contacts, credentials, etc.) — because your device already holds the keys needed to decrypt its own content, this local copy is stored in plaintext within the app's private, sandboxed storage area, which is not accessible to other apps and is protected by your device's OS-level security and encryption-at-rest.

Actions taken while offline (creating or editing content) are queued locally and transmitted to our servers once connectivity is restored. Clearing the app's local storage or uninstalling the App removes this local copy; it does not affect the encrypted copy retained on our servers (subject to [Section 11](#11-data-retention)) unless you have deleted your account.

---

## 6. Guest Mode

If you use Forge in "Guest" mode, no account is created on our servers, no email is collected, and your data is stored **only locally on your device** — it is never transmitted to us. Guest data is not backed up, does not sync across devices, and is not encrypted with a server-recoverable key. Uninstalling the App or clearing its storage permanently deletes guest data with no way for us to retrieve it, since we never received a copy. If you later choose "Create account & sync," your local guest data is uploaded, encrypted, and associated with your new account as described elsewhere in this Policy.

---

## 7. How We Share Information

We do not sell your personal information. We share information only in the following circumstances:

- **With your collaborators** — information you choose to share within a shared project (subject to E2EE as described in [Section 4](#4-end-to-end-encryption-what-we-can-and-cannot-see)) is visible to that project's other collaborators according to their role/permissions.
- **With service providers** — vendors who process data on our behalf under contractual confidentiality and data-protection obligations, limited to the purposes described in [Section 8](#8-third-party-services).
- **For legal reasons** — if required by law, subpoena, or other legal process, or to protect the rights, property, or safety of Zent Labs, our users, or the public.
- **In a business transfer** — if Zent Labs is involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction, subject to this Policy or a policy at least as protective.
- **With your consent** — for any other purpose disclosed to you at the time of collection, with your consent.

---

## 8. Third-Party Services

We rely on the following categories of third-party service providers. Each processes only the data necessary for its function:

| Provider Category | Purpose | Data Involved |
|---|---|---|
| **Backend hosting/infrastructure** | Hosting our REST middleware ("forge_mw"), databases, and file storage | Account data, encrypted project data, device/usage logs |
| **Transactional email delivery** | Sending one-time passcodes, invitation emails, account notices | Email address, email content |
| **Apple (Sign in with Apple)** | Authentication | Apple identity token, name/email (or private relay email) |
| **Google (Sign in with Google, Firebase Cloud Messaging)** | Authentication; Android push notification delivery | Google identity token, name/email; device push token |
| **Apple Push Notification service (APNs)** | iOS push notification delivery | Device push token |
| **RevenueCat** | Subscription and in-app purchase management | Purchase/subscription status, anonymized purchase identifiers |
| **Crash/diagnostics tooling** (if enabled) | Stability monitoring | Device information, crash logs, non-content diagnostic data |

We require our service providers to use the data we share only to perform services on our behalf and in a manner consistent with this Policy, and to maintain appropriate confidentiality and security measures.

---

## 9. Push Notifications

The App requests permission to send push notifications for activity updates (comments, task changes, invitations) and meeting reminders. Notification delivery requires a device push token (APNs on iOS, FCM on Android) to be shared with the respective platform provider. You can disable push notifications at any time through your device's system settings; disabling them does not affect other App functionality.

Meeting reminders you schedule are handled entirely on-device as local notifications and do not require any data to leave your device to function.

---

## 10. Biometric Data

If you enable biometric sign-in (Face ID, Touch ID, or Android fingerprint/face unlock), authentication is performed entirely by your device's operating system. **We do not receive, store, transmit, or have access to any biometric data or templates.** Biometric authentication on your device simply unlocks locally cached credentials/session tokens already stored in your device's secure enclave/keystore; it does not send biometric information to us or to any third party.

---

## 11. Data Retention

- **Account and project data:** retained for as long as your account is active, or as needed to provide the Service.
- **Encrypted content:** retained on our servers until you delete the specific item, delete the project, or delete your account.
- **Backup/recovery key material:** retained until you delete your account or explicitly clear it via device tools.
- **Server logs and diagnostics:** typically retained for a limited period (generally up to 90 days) for security, debugging, and abuse-prevention purposes, then deleted or anonymized.
- **Guest mode data:** never transmitted to us; retention is entirely governed by your device (see [Section 6](#6-guest-mode)).

We may retain certain information for longer where required by law, to resolve disputes, enforce our agreements, or for legitimate backup/archival purposes, in each case limited to what is necessary for that purpose.

---

## 12. Data Security

We implement technical and organizational measures designed to protect your information, including:

- **End-to-end encryption** of project content, as described in [Section 4](#4-end-to-end-encryption-what-we-can-and-cannot-see)
- **Encryption in transit** via TLS/HTTPS for all communication between the App and our servers
- **Secure local storage** of tokens and key material using platform-provided secure storage (iOS Keychain / Android Keystore, via `expo-secure-store`)
- **Access controls** limiting employee/contractor access to production systems on a need-to-know basis
- **Password hashing** using industry-standard algorithms for accounts that use password authentication

No method of transmission or storage is 100% secure. While we work to protect your information, we cannot guarantee its absolute security. If we become aware of a security incident affecting your personal information, we will notify you and relevant authorities as required by applicable law.

---

## 13. International Data Transfers

Zent Labs is based in the United States, and our servers and service providers may process and store information in the United States or other countries. If you access the App from outside the United States, you understand that your information may be transferred to, stored, and processed in a country different from your own, which may have data protection laws that differ from those of your jurisdiction. Where required, we rely on appropriate legal mechanisms (such as standard contractual clauses) to safeguard such transfers.

---

## 14. Your Rights and Choices

Depending on your location, you may have some or all of the following rights regarding your personal information:

- **Access** — request a copy of the personal information we hold about you.
- **Correction** — request correction of inaccurate or incomplete information (you can update most profile information directly in the App).
- **Deletion** — request deletion of your account and associated data (see [Section 17](#17-account-deletion)).
- **Portability** — request an export of your data in a portable format. The App includes a self-service data export feature in Profile settings.
- **Withdraw consent** — where processing is based on consent, withdraw it at any time (e.g., by disabling optional permissions such as push notifications or biometrics).
- **Object/restrict processing** — object to or request restriction of certain processing, subject to applicable law.
- **Non-discrimination** — we will not discriminate against you for exercising any of these rights.

To exercise any of these rights, contact us at **zent.support@zentstudio.net**. We may need to verify your identity before fulfilling certain requests. We will respond within the timeframe required by applicable law.

---

## 15. Children's Privacy

Forge is not directed at children under the age of 13 (or the minimum age required by your jurisdiction), and we do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without verified parental consent, we will take steps to delete that information. If you believe a child has provided us with personal information, please contact us at **zent.support@zentstudio.net**.

---

## 16. Regional Disclosures

### 16.1 European Economic Area / United Kingdom (GDPR)

If you are located in the EEA or UK, our legal bases for processing your personal information include: performance of a contract (providing the Service), legitimate interests (security, service improvement), consent (e.g., optional notifications, biometrics), and compliance with legal obligations. You have the rights described in [Section 14](#14-your-rights-and-choices), plus the right to lodge a complaint with your local data protection authority.

### 16.2 California (CCPA/CPRA)

California residents have the right to know what personal information is collected, used, disclosed, or sold; to request deletion; to correct inaccurate information; to opt out of the sale or sharing of personal information (**we do not sell or share personal information for cross-context behavioral advertising**); and to non-discrimination for exercising these rights. To submit a request, contact us at **zent.support@zentstudio.net**.

### 16.3 Other Jurisdictions

If you reside in a jurisdiction with data protection laws not specifically addressed above (e.g., Brazil's LGPD, Canada's PIPEDA, Virginia's VCDPA), we will honor applicable rights consistent with those laws upon request.

---

## 17. Account Deletion

You may delete your account at any time from within the App (Profile → Data & Privacy). Account deletion:

- Permanently deletes your profile and account credentials
- Removes your encrypted content from our active systems, subject to any residual copies in encrypted backups that are purged on their normal rotation schedule
- Removes your access to any shared projects (ownership of projects you created may need to be transferred or will be handled per our account-deletion process if you are the sole owner of shared projects)
- **Cannot be undone** — once processed, we cannot restore your account or its content

If you used Guest Mode and never created an account, no server-side deletion is necessary — simply deleting the App or clearing its data removes all local information.

---

## 18. Changes to This Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. If we make material changes, we will notify you through the App or by other reasonable means (e.g., email) prior to the change becoming effective, and we will update the "Last Updated" date at the top of this Policy. Your continued use of the App after changes take effect constitutes acceptance of the revised Policy.

---

## 19. Contact Us

If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:

**Zent Labs**
Email: **zent.support@zentstudio.net**

---

*This document is provided as a working draft based on Forge's actual data-handling architecture. It is not a substitute for review by a qualified attorney familiar with your specific business, user base, and applicable jurisdictions (including app-store requirements from Apple and Google) before publication or submission to app stores.*
