import logo from './logo.png';

export const assets = {
  logo,
};

export const appPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$5',
    credits: 100,
    description: 'Try ideas and build your first AI projects easily.',
    features: [
      '20 Generations (5 Credits each)',
      'Live Preview of your website',
      'Clean Tailwind CSS code ready to use',
      'Fully responsive designs for all screens',
      'Standard email support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$19',
    credits: 400,
    description: 'Ideal for developers and creators needing more flexibility.',
    features: [
      '80 Generations & modifications',
      'High priority processing',
      'Support for complex interfaces',
      'Unlimited project management',
      'Priority technical support',
    ],
  },
  {
    id: 'agency',
    name: 'Agency',
    price: '$49',
    credits: 1000,
    description: 'For high-volume production at best credit value.',
    features: [
      '200 Generations for large portfolios',
      'Best value for money',
      'Dedicated technical support',
      'Early access to new features',
      'Advanced SEO-optimized code',
    ],
  }
]


export const iframeScript = `
        <style id="ai-preview-style">
        .ai-selected-element {
            outline: 2px solid #6366f1 !important;
        }
        </style>
        <script id="ai-preview-script">
        (function () {
            // If this HTML is opened directly (not in an iframe), do nothing.
            if (window === window.parent) {
            return;
            }

            let selectedElement = null;

            function clearSelected() {
            if (selectedElement) {
                selectedElement.classList.remove('ai-selected-element');
                selectedElement.removeAttribute('data-ai-selected');
                selectedElement.style.outline = '';
                selectedElement = null;
            }
            }

            document.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            clearSelected();

            const target = e.target;

            // Don't select body or html
            if (!target || target.tagName === 'BODY' || target.tagName === 'HTML') {
                window.parent.postMessage({ type: 'CLEAR_SELECTION' }, '*');
                return;
            }

            selectedElement = target;
            selectedElement.classList.add('ai-selected-element');
            selectedElement.setAttribute('data-ai-selected', 'true');

            const computedStyle = window.getComputedStyle(selectedElement);

            window.parent.postMessage({
                type: 'ELEMENT_SELECTED',
                payload: {
                tagName: selectedElement.tagName,
                className: selectedElement.className,
                text: selectedElement.innerText,
                styles: {
                    padding: computedStyle.padding,
                    margin: computedStyle.margin,
                    backgroundColor: computedStyle.backgroundColor,
                    color: computedStyle.color,
                    fontSize: computedStyle.fontSize
                }
                }
            }, '*');
            });

            window.addEventListener('message', function (event) {
            if (event.data.type === 'UPDATE_ELEMENT' && selectedElement) {
                const updates = event.data.payload;

                if (updates.className !== undefined) {
                selectedElement.className = updates.className;
                }

                if (updates.text !== undefined) {
                selectedElement.innerText = updates.text;
                }

                if (updates.styles) {
                Object.assign(selectedElement.style, updates.styles);
                }
            } else if (event.data.type === 'CLEAR_SELECTION_REQUEST') {
                clearSelected();

                // extra safety: remove our class + outline from any stray elements
                document.querySelectorAll('.ai-selected-element,[data-ai-selected]').forEach(function (el) {
                el.classList.remove('ai-selected-element');
                el.removeAttribute('data-ai-selected');
                el.style.outline = '';
                });
            }
            });
        })();
        </script>
`;