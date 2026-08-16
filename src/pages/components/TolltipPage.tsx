import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

type Props = {};

const TooltipPage = ({}: Props) => {
  const usageCode = `import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button/Button";

<Tooltip content="Save your changes">
  <Button variant="primary">
    Hover me
  </Button>
</Tooltip>

<Tooltip content="Delete item" position="top">
  <Button variant="dark">
    Delete
  </Button>
</Tooltip>
`;

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "-",
      description: "Text displayed inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Controls the tooltip position",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Element that triggers the tooltip",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Tooltip
        </h1>

        <p className="text-xl text-gray-600">
          The Tooltip component displays a small message when the user
          hovers over an element.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Usage
        </h2>

        <ComponentDemo code={usageCode}>
          <div className="flex gap-6 items-center">

            <Tooltip content="Save your changes">
              <Button variant="primary">
                Hover me
              </Button>
            </Tooltip>

            <Tooltip
              content="Delete this item"
              position="top"
            >
              <Button variant="dark">
                Delete
              </Button>
            </Tooltip>

            <Tooltip
              content="More information"
              position="bottom"
            >
              <Button variant="outline">
                Info
              </Button>
            </Tooltip>

          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          API Reference
        </h2>

        <PropsTable data={propsData} />
      </section>

    </div>
  );
};

export default TooltipPage;