---
title: Pricing
slug: pricing
sections:
  - type: PricingSection
    title:
      type: TitleBlock
      text: Elastyczny Cennik
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Wybierz optymalny pakiet dla swojego salonu
    plans:
      - type: PricingPlan
        title: Essentials
        price: 800 zł
        details: Najlepszy wybór dla startujących
        description: >+
          Najlepszy wybór na start, by sprawdzić skuteczność naszej usługi.

          Pozwala stopniowo zwiększać liczbę pozytywnych opinii i budować
          pierwszą falę zaufania w Booksy.

        features:
          - 50 opinii w ciągu miesiąca
          - Ręcznie pisane komentarze
          - Codzienne raportowanie postępów
          - Monitorowanie wyników w Booksy
        image:
          type: ImageBlock
          url: /images/abstract-feature1.svg
          altText: Pricing plan 1
        actions:
          - type: Button
            label: Wybierz Essentials
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Professional
        price: 1400 zł
        details: 'Idealny, by zostać liderem w okolicy'
        description: >+
          Idealny, by wyróżnić się na rynku i pokonać lokalną konkurencję.

          Zapewnia większe zaangażowanie klientów dzięki szybszemu przyrostowi
          opinii i rozbudowanym raportom.

        features:
          - 100 opinii w ciągu miesiąca
          - Komentarze dopasowane do branży
          - Pełne raporty i wsparcie mailowe
          - Zwiększone zaangażowanie klientów
        image:
          type: ImageBlock
          url: /images/abstract-feature2.svg
          altText: Pricing plan 2
        actions:
          - type: Button
            label: Wybierz Professional
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Elite
        price: 2400 zł
        details: Konkurencja zostaje w tyle
        description: >+
          Stworzony dla najbardziej wymagających salonów, które chcą zdominować
          ranking w Booksy.

          Zapewnia maksymalną liczbę recenzji w krótkim czasie oraz priorytetowe
          wsparcie naszego zespołu.

        features:
          - 200 opinii w ciągu miesiąca
          - Dedykowany opiekun kampanii
          - Priorytetowe wsparcie i analizy
          - Pozycjonowanie na lokalnego lidera
        image:
          type: ImageBlock
          url: /images/abstract-feature3.svg
          altText: Pricing plan 3
        actions:
          - type: Button
            label: Wybierz Enterprise
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
seo:
  metaTitle: Pricing - Demo site
  metaDescription: This is the pricing page built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
