+++
date = '2026-04-19T22:20:04Z'
draft = true
title = 'Projects & Open Source'
+++

A selection of active development projects, infrastructure tooling, and custom language design.

{{< card-grid >}}
  
  <!-- {{< card title="MAML (Matt's Async ML)" >}}
  A custom programming language designed for utilities, policy enforcement, and light ML inference. Features a hand-written recursive descent parser, ADTs, and an expression-based `match` construct utilizing `=>` returns.
  {{< /card >}} -->

  {{< card title="Sovereign Sensor" repo="https://github.com/mattcarp12/sovereign-sensor">}}
  An eBPF-powered Kubernetes Operator. Built to abstract kernel complexity and enforce strict runtime sovereignty logic and policy watching directly at the pod level.
  {{< /card >}}

  {{< card title="Cloud Infrastructure (MDQ)" >}}
  Automated AWS EKS cluster deployment and management workflows. Architected using Terraform for infrastructure as code, integrated with Helm and ArgoCD for continuous GitOps delivery.
  {{< /card >}}

{{< /card-grid >}}
