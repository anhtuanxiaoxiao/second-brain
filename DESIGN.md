---
version: 1
name: Second Brain · Kian — "Linear" system (v22)
description: "Một hệ duy nhất cho toàn app, dựa trên DESIGN.md của Linear (VoltAgent/awesome-design-md), áp các luật của Taste Skill (một hệ, một kiểu nút, một kiểu thẻ, một thang bo góc, không tím) và rà theo Vercel Web Interface Guidelines. Nền gần đen, bậc thang bề mặt, viền mảnh, một màu nhấn xanh dương, chữ Inter có tracking âm ở tiêu đề. Có chế độ sáng (đảo màu các bảng; vũ trụ 3D vẫn tối)."

colors:
  canvas: "#08090a"        # nền trang chủ, màn chào
  surface-1: "#0f1011"     # bảng, thẻ trang chủ, ô nhập
  surface-2: "#141516"     # chip, nút phụ
  surface-3: "#1b1c1e"     # tab đang chọn, tooltip, toast
  surface-4: "#222326"     # nút đang chọn trong thanh chuyển
  hairline: "#23252a"
  hairline-strong: "#34343a"
  ink: "#f7f8f8"
  ink-muted: "#a9b0bd"     # --dim
  ink-subtle: "#80868f"    # --faint (≥4.5:1 trên surface-1)
  accent: "#6ea1ff"        # chữ/viền nhấn, vòng focus, liên kết
  accent-solid: "#2f6fe0"  # nền nút chính, chữ trắng (4.7:1)
  accent-hover: "#3f7ff0"
  success: "#4cc38a"
  data: ["#ffb454", "#5cf2a8", "#7df3ff", "#ef8a6a", "#ff8fb6"]  # chỉ cho số liệu, vòng tiến độ, thiên hà

typography:
  family: "Inter, Be Vietnam Pro, system-ui"   # Inter có đủ dấu tiếng Việt; bỏ Fraunces
  display: { weight: 600, tracking: "-0.022em → -0.03em", wrap: balance }
  body: { size: "14–16px", weight: 400, line-height: 1.5–1.75 }
  eyebrow: { size: "11–12px", weight: 600, tracking: "0.06em", uppercase: true, color: ink-subtle }
  numbers: tabular-nums

rounded: { button: 8px, input: 8px, card: 12px, panel: 14px, dialog: 16px, tag: pill }
spacing: { base: 4px, card-padding: "16–20px", gap: "8–12px" }

components:
  button-primary: "bg accent-solid, chữ trắng, bo 8, padding 8×14, weight 500; hover accent-hover; nhấn scale .98"
  button-secondary: "bg trong suốt hoặc surface-2, viền hairline-strong, chữ ink, bo 8"
  tag: "sug, gch, pill: bo tròn, surface-2, viền hairline"
  card: "surface-1 (hoặc trắng 3% trên bảng), viền hairline, bo 12, không gradient, không vạch màu trên"
  panel: "glass = surface-1 86% + blur 20, viền hairline, bóng 0 16 48 đen 45%"
  input: "trắng 3%, viền hairline, bo 8; focus viền accent + vòng 3px accent 25%"
  focus: "outline 2px accent, offset 2"
---

## Nguyên tắc
- Một màu nhấn (xanh dương). Màu khác chỉ dùng cho **dữ liệu**: vòng tiến độ, chấm nhóm, thiên hà.
- Không gradient trang trí, không chữ chuyển màu, không đèn rọi, không vệt sáng chạy, không tím (luật Taste Skill; nên không lấy màu tím-lavender gốc của Linear).
- Chiều sâu bằng bậc thang bề mặt và viền mảnh, không bằng bóng màu.
- Chuyển động: thẻ bấm được nhấc 2px khi rê chuột, nút lún nhẹ khi bấm, vào trang một lần; tôn trọng `prefers-reduced-motion`.
- Điện thoại: vùng bấm ≥ 44px, ô nhập 16px (không bị phóng to trên iPhone), cho phép zoom.

## Chế độ sáng
`body.lin.lt`: các bề mặt giao diện (bảng, trang chủ, hộp thoại, toast) đảo màu bằng `invert(1) hue-rotate(180deg)`, ảnh được đảo lại. Vũ trụ 3D giữ tối.

## Giao diện cũ
Gallery và Cổ điển vẫn mở được qua ⌘K ("Giao diện cũ"), nhưng mặc định mọi máy chuyển sang hệ này một lần (`sb_linmig`).
