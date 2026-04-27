---
title: "Projects & Open Source"
date: 2026-04-26
draft: false
---

A selection of active projects and open source work across cloud-native
infrastructure, security tooling, and distributed systems.

---

### Personal Projects

{{< card-grid >}}

  {{< card title="Sovereign Sensor" repo="https://github.com/mattcarp12/sovereign-sensor" >}}
  An eBPF-powered Kubernetes Operator for runtime egress monitoring and policy
  enforcement at the pod level. Watches kernel-level network events via eBPF,
  evaluates them against configurable policy, and triggers alerts or blocking
  actions without requiring a sidecar. Actively in development.
  {{< /card >}}

  {{< card title="DNS Radar" repo="https://github.com/mattcarp12/dns-radar" >}}
  An open source DNS tunneling detector. Analyzes DNS query patterns — entropy,
  subdomain length, query frequency, and payload characteristics — to surface
  covert data exfiltration channels. Actively in development.
  {{< /card >}}

{{< /card-grid >}}

---

### Open Source Contributions

{{< card-grid >}}

  {{< card title="kube-vip" repo="https://github.com/kube-vip/kube-vip" >}}
  A highly available virtual IP and load balancer for Kubernetes control planes
  and services. Contributions focus on core functionality and reliability.
  {{< /card >}}

  {{< card title="external-secrets" repo="https://github.com/external-secrets/external-secrets" >}}
  A Kubernetes operator that integrates external secret management systems —
  AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager, and others — into
  native Kubernetes Secrets.
  {{< /card >}}

  {{< card title="trivy" repo="https://github.com/aquasecurity/trivy" >}}
  A comprehensive open source vulnerability and misconfiguration scanner for
  containers, filesystems, and infrastructure-as-code. Maintained by Aqua Security
  and widely used in CI/CD pipelines.
  {{< /card >}}

{{< /card-grid >}}