const Projects = () => {
  return (
    <>
      <div className="relative flex items-center justify-start py-12 px-4 sm:px-8">
        <div className="relative inline-block">
          <h2 className="text-7xl sm:text-8xl font-extrabold text-gray-200">
            Experience
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            PROJECTS
          </p>
        </div>
      </div>
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-300 border border-gray-700 rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-2">
            Security Delivery Specialist
          </h1>
          <h2 className="text-lg font-semibold mb-4">Accenture</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Led SOC operations as shift lead and escalation point for Level 1
              and 2 analysts
            </li>
            <li>
              Handled security incidents, conducted threat hunting, and
              developed MITRE ATT&CK-aligned use cases
            </li>
            <li>
              Delivered expert training, performed quality assurance, and
              facilitated reverse shadow sessions
            </li>
            <li>
              Participated in knowledge-sharing sessions and daily stand-up
              meetings with clients
            </li>
            <li>
              Developed and maintained Security Operations Response Plans and
              supported whitelisting efforts
            </li>
            <li>
              Provided on-call client support and reviewed or closed completed
              tasks
            </li>
          </ul>
        </div>

        <div className="bg-gray-300 border border-gray-700 rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-2">
            Technical Writer (Security Engineering)
          </h1>
          <h2 className="text-lg font-semibold mb-4">Wazuh Inc.</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Delivered Wazuh SIEM consultancy services including
              troubleshooting, maintenance, deployment, and integration
            </li>
            <li>
              Tested and evaluated Wazuh application releases prior to
              production
            </li>
            <li>
              Researched threat intelligence and developed detections to enhance
              Wazuh decoders and rules
            </li>
            <li>
              Provided client support for Wazuh SIEM and its integration with
              other tools
            </li>
            <li>Wrote blogs to help users effectively utilize Wazuh SIEM</li>
            <li>Contributed to official Wazuh documentation</li>
          </ul>
        </div>

        <div className="bg-gray-300 border border-gray-700 rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-2">
            Senior Cybersecurity Analyst II
          </h1>
          <h2 className="text-lg font-semibold mb-4">CyberSOC Africa</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Led SOC operations as shift lead and escalation point while
              supporting incident response and threat hunting
            </li>
            <li>
              Documented security breaches, assessed impact, and ensured
              compliance with ISO 27001 standards
            </li>
            <li>
              Configured and managed security tools including Splunk, Qradar,
              Alienvault, Arcsight, and others
            </li>
            <li>
              Utilized MITRE ATT&CK and Cyber Kill Chain frameworks for threat
              detection and resolution
            </li>
            <li>
              Conducted Red Team assessments and provided advisory support for
              threat-hunting activities
            </li>
            <li>
              Monitored and maintained security systems to protect internal
              information using industry best practices
            </li>
          </ul>
        </div>

        <div className="bg-gray-300 border border-gray-700 rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-2">
            Systems and Network Support Engineer
          </h1>
          <h2 className="text-lg font-semibold mb-4">AfriHUB ICT Institute</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Troubleshot faulty network configurations and created VLANs using
              console access on Cisco Layer 2 and 3 switches
            </li>
            <li>
              Assisted with installation, configuration, and maintenance of
              routers, switches, and firewalls
            </li>
            <li>Monitored network performance and resolved issues promptly</li>
            <li>
              Executed projects involving access control lists, TFTP, FTP, SMTP,
              IMAP, POP3, DHCP, and DNS configurations
            </li>
            <li>
              Implemented routing configurations including BGP, OSPF, EGP, and
              IGP protocols
            </li>
            <li>
              Supported documentation and organization of network assets and
              configurations
            </li>
          </ul>
        </div>

        <div className="bg-gray-300 border border-gray-700 rounded-xl p-6">
          <h1 className="text-2xl font-semibold mb-2">Intern</h1>
          <h2 className="text-lg font-semibold mb-4">
            Nigerian Communications Satellite Limited (NIGCOMSAT)
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Deployment and confguration of Active Directory (Window server).
            </li>
            <li>
              Troubleshoot network problems and solved hardware or software
              issues.
            </li>
            <li>
              Integrated low noise block-down converters for Ku and Ka band
              antenna
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
