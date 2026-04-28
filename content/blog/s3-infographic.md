+++
date = '2026-04-28'
draft = false
title = 'Which S3 Storage Class should you choose?'
summary = 'A comparison of the S3 storage class options'
+++

### S3 Core Concepts

| Concept | Definition |
| :--- | :--- |
| **Durability** | Probability data won't be lost/corrupted. *All* S3 classes provide **11 9s (99.999999999%)**. |
| **Availability** | Percentage of time data is accessible for reading and writing. |
| **Frequent Access** | Data accessed multiple times a month. |
| **Infrequent Access** | Data accessed ≤ once a month. Incurs a per-GB **retrieval fee** upon access. |
| **Unpredictable Access** | Pattern is unknown or changing. Use **Intelligent-Tiering** to auto-shift data based on usage. |

### How AWS Charges for S3

| Billing Dimension | What You Pay For |
| :--- | :--- |
| **Storage** | Per GB, per month (gets cheaper as you move to colder tiers). |
| **Requests** | API calls made against your buckets (e.g., `PUT`, `GET`, `LIST`, `COPY`). |
| **Data Retrieval** | A per-GB fee applied when pulling data *out* of Infrequent Access (IA) or Glacier tiers. |
| **Data Transfer** | Transferring data *OUT* to the internet or other AWS regions. (Data transfer *IN* to S3 is always free). |
| **Management & Analytics** | Optional features like object tagging, Intelligent-Tiering monitoring, or S3 Storage Lens. |
| **⚠️ THE GOTCHA: Minimum Storage Durations** | Certain storage classes require a minimum time commitment (e.g., 30 days for Standard-IA, 90 days for Glacier Instant, 180 days for Deep Archive). If you delete, overwrite, or transition an object *before* this period ends, **you are still billed for the remaining days**.


### Use this flowchart to help you decide which S3 storage class to use:

{{<s3-flow>}}