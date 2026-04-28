+++
date = '2026-04-28'
draft = false
title = 'Which S3 Storage Class should you choose?'
summary = 'A comparison of the S3 storage class options'
+++

### Use this flowchart to help you decide which S3 storage class to use

{{< lightbox src="/img/s3-flow-2.webp" alt="AWS S3 Storage Class Flowchart" >}}

### S3 Core Concepts

#### Key Terms

* **Durability:** The probability that your data will not be lost or corrupted. *All* S3 storage classes provide **11 9s (99.999999999%)** of object durability.
* **Availability:** The percentage of time your data is accessible for reading and writing.

#### Data Access Patterns

* **Frequent:** Data accessed multiple times a month. 
* **Infrequent:** Data accessed once a month or less. You pay a per-GB **retrieval fee** when you do access it.
* **Unpredictable:** You don't know the pattern, or it changes constantly. Use **Intelligent-Tiering**, which moves data between frequent and infrequent access tiers automatically based on actual usage.

#### How AWS Charges for S3

You are billed across several dimensions:
1.  **Storage:** Per GB, per month (cheaper in colder tiers).
2.  **Requests:** API calls like `PUT`, `GET`, `LIST`, and `COPY`.
3.  **Data Retrieval:** A per-GB fee applied when pulling data out of Infrequent Access (IA) or Glacier tiers.
4.  **Data Transfer:** Data transferred *OUT* of S3 to the internet or other regions (Data transfer *IN* is free).
5.  **Management & Analytics:** Small fees for object tagging, Intelligent-Tiering monitoring, or S3 Storage Lens.

#### Minimum Storage Durations

Some storage classes require a minimum commitment (e.g., 30 days for Standard-IA, 90 days for Glacier Instant, 180 days for Deep Archive). **The Gotcha:** If you delete, overwrite, or transition an object *before* the minimum duration ends, **you are still billed for the remaining days**. 